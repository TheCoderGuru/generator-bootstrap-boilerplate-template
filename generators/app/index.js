var Generator = require("yeoman-generator");

var chalk = require('chalk');

module.exports = class extends Generator{

    async prompting(){

        const answers = await this.prompt([
        
        {
            
            type: 'list',
            
            name: 'name',
            
            choices: [ 'template_1', 'template_2' ],
            
            message: 'What template would you like to generate?'
        
        }]);

        if( answers.name === "template_2" ){

            this.log( "Generating bootstrap_template_2" )

            this.fs.copy(
                
                this.templatePath('bootstrap_template_2/src'),
                
                this.destinationPath('bootstrap_template_2/src')
            
            );
            
            this.fs.copy(
                
                this.templatePath('bootstrap_template_2/scss'),
                
                this.destinationPath('bootstrap_template_2/scss')
            
            );

            this.fs.copy(
                
                this.templatePath('bootstrap_template_2/icon'),
                
                this.destinationPath('bootstrap_template_2/icon')
            
            );
            
            this.fs.copy(
                
                this.templatePath('bootstrap_template_2/package.json'),
                
                this.destinationPath('bootstrap_template_2/package.json')
                
            );
        
        } 

        else {
            
            this.fs.copy(
                
                this.templatePath('src/index.html'),
                
                this.destinationPath('src/index.html')
            
            );
            
            this.fs.copy(
                
                this.templatePath('src/index.js'),
                
                this.destinationPath('src/index.js')
            
            );
            
            this.fs.copy(
                
                this.templatePath('scss/custom.scss'),
                
                this.destinationPath('scss/custom.scss')
            
            );
            
            this.fs.copy(
                
                this.templatePath('package.json'),
                
                this.destinationPath('package.json'),
                
                { name: this.appname }
            
            );
        
        }
    
    }

	    end() {
		    
            this.log( chalk.bold.green( 'Generated all the files.. Happy Bootstrapping' ) )
            
            this.log( ' ' )
            
            this.log( 'Thank you for using this generator, changes will be made to better improve your experience so do leave your valuable feedback' )
            
            this.log( ' ' )

            this.log('Type `npm run dev` to run the development');
            
            this.log( ' ' )
            
            this.log( 'Bootstrap Boilerplate Template | TheCoderGuru' )
        
        }
};