'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
<<<<<<< HEAD
        `Welcome to the great ${chalk.red('generator-bootstrap-boilerplate-template')} generator!`
=======
        `Welcome to the great ${chalk.red('generator-thecoderguru')} generator!`
>>>>>>> 75771e58d13da0c81df47d7ede0ba6b8b7e9cd0a
      )
    );

    const prompts = [
    {
        type: 'input', 
        name: 'name',
        message: 'What would you like to name your website project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your website project'
    },
    {
        type: 'input',
        name: 'fullname',
        message: 'Please enter your name that you would like to be used for this project'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the url of your repository'
    },
    {
        type: 'list',
        name: 'option',
        choices: [ 'template_1', 'template_2' ],
        message: 'Which website template would you like to generate?'
    }];

    return this.prompt(prompts).then(props => {
        this.props = props;
    })
    }


    writing() {
        if( this.props.option === "template_1" ){
            this.fs.copy( 
                this.templatePath( 'src/index.html' ), 
                this.destinationPath( 'src/index.html' ) 
            );
            this.fs.copy( 
                this.templatePath( 'scss/custom.scss' ), 
                this.destinationPath( 'scss/custom.scss' ) 
            );
<<<<<<< HEAD
        } else {
            mkdirp('bootstrap_template_2/src')
            mkdirp( 'bootstrap_template_2/scss' )

            this.fs.copy(
                this.templatePath( 'index.html' ),
                this.destinationPath( 'bootstrap_template_2/src/index.html' ) 
            )

            this.fs.copy(
                this.templatePath( 'index.js' ),
                this.destinationPath( 'bootstrap_template_2/src/index.js' ) 
            )

            this.fs.copy(
                this.templatePath( 'custom.scss' ),
                this.destinationPath( 'bootstrap_template_2/scss/custom.scss' ) 
            )

            this.fs.copy(
                this.templatePath( 'images/' ),
                this.destinationPath( 'bootstrap_template_2/images/' ) 
            )
        }

            const pkg = require( '../../package.json')
            pkg.name = this.props.name;
            pkg.repo = this.props.repo;
=======

            const pkg = require( '../../package.json')
            pkg.name = this.props.name;
>>>>>>> 75771e58d13da0c81df47d7ede0ba6b8b7e9cd0a
            pkg.version = '0.1.0';
            pkg.description = this.props.description;
            pkg.contributors = [ `${ this.props.fullname }`]
            pkg.dependencies = undefined;
            pkg.devDependencies = undefined;
            pkg.files = undefined;
            pkg.keywords = undefined;
            pkg.publishConfig = undefined;
            if( this.props.repo != null && this.props.repo.trim() != '' ){
                pkg.repository = {
                    "type": "git",
                    "url": `git+${this.props.repo}.git`
                };
                pkg.bugs = {
                    "url": `git+${this.props.repo}/issues`
                };
<<<<<<< HEAD
                pkg.homepage = `${this.props.repo}#readme`;
=======
                pkg.homepage = `${this.props/repo}#readme`;
>>>>>>> 75771e58d13da0c81df47d7ede0ba6b8b7e9cd0a
            }
            else {
                pkg.repository = undefined;
                pkg.bugs = undefined;
                pkg.homepage = undefined;
            }
            pkg['scripts'] = {
                dev: "parcel ./src/index.html",
                prebuild: "npx rimraf build",
                build: "parcel build --public-url ./ ./src/index.html --dist-dir build"
            };
            this.fs.writeJSON(this.destinationPath('package.json'), pkg)
            this.log('Finished writing the package.json file')
<<<<<<< HEAD
=======
        }
>>>>>>> 75771e58d13da0c81df47d7ede0ba6b8b7e9cd0a
      
    }


	end() {
		    
        this.log( chalk.bold.green( 'Generated all the files.. Happy Bootstrapping' ) )
            
        this.log( ' ' )
            
        this.log( 'Thank you for using this generator, changes will be made to better improve your experience so do leave your valuable feedback.' )
            
        this.log( ' ' )

        this.log('Type `npm run dev` to run the development server.');
            
        this.log( ' ' )
            
        this.log( 'Bootstrap Boilerplate Template | TheCoderGuru' )
        
    }
};