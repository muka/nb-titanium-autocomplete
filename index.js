
var config = {
    docDir: "./apidoc",
};

var fs = require('fs'),
        glob = require('glob'),
        yaml = require('js-yaml')
        ;

var options = {
};

var TiDocsBuild = function (conf) {
    this.conf = conf;
};

TiDocsBuild.prototype.findFiles = function (then) {
    glob(this.conf.docDir + "/**/*.yml", options, function (err, files) {
        then && then(err, files);
    });
};

TiDocsBuild.prototype.getNamespace = function (file) {
    
    var substr = file.replace(this.conf.docDir + '/', '');
    substr = substr.replace('.yml', '');
    
    var pieces = substr.split('/');
    
    
    if(pieces[ pieces.length-2 ] === pieces[ pieces.length-1 ]) {
        pieces.splice(pieces.length - 1, 1);
    }
    
    substr = pieces.join('.');
    
//    console.log(file, substr); process.exit();
    
    return substr;
};
TiDocsBuild.prototype.parseYml = function (file, then) {
    
    var me = this;
    
    try {
        yaml.safeLoadAll(fs.readFileSync(file, 'utf8'), function(doc) {

            doc.__meta = {
                file: file,
                ns: me.getNamespace(file),
            };

            then && then(null, doc);
        });
    } catch (e) {
        then && then(e, null);
    }
};

TiDocsBuild.prototype.parse = function (then) {
    
    var me = this;
    
    this.findFiles(function(err, files) {

        if(err) {
            console.error(err);
            return;
        }

        files.forEach(function(file) {

            me.parseYml(file, function(err, doc) {
                
                if(err) {
                    console.error("Error parsing yml for " + file, err);
                    return;
                }
                
                me.createDoc(doc);
            });

        });
        
        then && then();
    });
};

/**
 * @param {type} yml
 * @param {type} then
 * @returns {undefined}
 */
TiDocsBuild.prototype.createDoc = function (yml, then) {
    
    var nssplit = yml.__meta.ns.split(".");
    
    if(yml.__meta.ns === 'Global' || nssplit[0] === 'Global') return;
    if(nssplit[0] === 'Modules') return;
    
    if(nssplit[ nssplit.length-1 ].substr(0,1).match(/[0-9]/)) {
        
        var new_name = '["' + nssplit[ nssplit.length-1 ] + '"]';
        nssplit.splice(nssplit.length-1, 1);
        
//        console.log(yml.name, nssplit, yml.__meta.ns);
        
        yml.__meta.ns = nssplit.join('.') + new_name;
        yml.name = nssplit.join('.') + new_name;
                
//        console.log(yml.name, nssplit, yml.__meta.ns);
//        process.exit();        
    }
    
    var me = this;
    var objdoc = [ ];
    
//    console.log(yml);
    
    
    var eventsDoc = [];
    
    var objdocblock = [ '/**' ];
    
    
    yml.extends && objdocblock.push('* @extends ' + yml.extends);
    yml.since && objdocblock.push('* @since ' + yml.since);
//    yml.creatable && objdocblock.push('* @constructor ');
    yml.platforms && objdocblock.push('* @requires ' + yml.platforms.join(', '));
    
    if(yml.events) {
        yml.events.forEach(function(event) {

            objdocblock.push('* @fires ' + yml.name + '#' + event.name);
            
            eventsDoc.push("/**");
            
            event.summary && eventsDoc.push("* " + event.summary.replace(/\n/g, "").replace(/\r/g, ""));
            
            eventsDoc.push("* @event " + yml.name + '#' + event.name);
            eventsDoc.push("* @type {Object}");

            if(event.properties) {
                
                var obj = [];
                event.properties.forEach(function(prop) {
                    
                    obj.push(
                        '* @type '+ prop.type + ' ' + 
                                    prop.name + ' ' + 
                                    (prop.summary ? prop.summary.replace(/\n/g, "").replace(/\r/g, "") : '')
                    );

                    prop.platforms && obj.push('* @requires ' + prop.platforms.join(', '));                        

                });
                
                eventsDoc.push(obj.join("\n"));
            }
            
            eventsDoc.push('*/');         
            
        });
    }
    
    objdocblock.push('*/\n');    
    
    var obj = [  ];
    
    obj.push(yml.name + ' = {');
    
    if(yml.properties) {
        yml.properties.forEach(function(prop) {
            
            obj.push('  /**');
            prop.summary && obj.push('  * '+ prop.summary.replace(/\n/g, "").replace(/\r/g, ""));
            obj.push('  * @type '+ prop.type);
            prop.platforms && obj.push('  * @requires ' + prop.platforms.join(', '));                        
            obj.push('  */');
            
            obj.push('  ' + prop.name + ': null,');

        });
    }
    
    obj.push('};\n\n');
    
    objdoc.push(objdocblock.join("\n"));
    objdoc.push(obj.join("\n"));
    
    if(yml.methods) {
        
        var methods = [];
        yml.methods.forEach(function(method) {

            var docs = [ '/**' ];               
            var params = [];
            
            if(method.summary) {
                docs.push('* ' + method.summary.replace(/\n/g, "").replace(/\r/g, ""));
            }
            
            if(method.deprecated) {
                docs.push('* @deprecated' + 
                                (method.deprecated.since ? ' since ' + method.deprecated.since : '' ) + 
                                (method.deprecated.removed ? ' removed ' + method.deprecated.removed : '') );
            }
            
            method.platforms && obj.push('* @requires ' + method.platforms.join(', '));                        
            
            if(method.since) {
                docs.push('* @since ' + method.since);
            }
            
            method.parameters && method.parameters.forEach(function(param) {
                
//                console.log(param.type);
                
                var paramStr = param.type;
                if(param.type instanceof Array) {
                    paramStr = param.type.join('|');
                }
                
                var paramName = param.name === 'default' ? 'defaultVal' : param.name;
                
                docs.push(
                    '* @param {'+ paramStr +'} ' + paramName + ' ' + (param.summary ? param.summary.replace(/\n/g, "").replace(/\r/g, "") : '')
                );

                params.push( paramName );

            });

            docs.push( '*/\n' );

            var methodObj = [ 
                docs.join("\n") , 
                yml.name , "." , method.name , " = function(" , params.join(", ") , ") {};\n" 
            ];

            methods.push( methodObj.join('') );

        });
        
        objdoc.push( methods.join("\n") );
        
    }
    
    if(eventsDoc) {
        objdoc.push(eventsDoc.join("\n"));
    }
    
    var docs = objdoc.join('');
    
    console.log( docs );

//    process.exit();
    
    
};


console.log(
    [
        'var Titanium = {};\n\n',
        'exports.Titanium = Titanium;\n\n' 
    ].join('')
);
        


var tidocs = new TiDocsBuild(config);
tidocs.parse();