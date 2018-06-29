'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Seja bem vindo ao gerador ${chalk.red('generator-polymer-init-yoo-nodejs')} Esse gerador utiliza o MongoDB como Banco de dados!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'Qual o nome do projeto?',
        default: 'gerador-yeoman'
      },
      {
        type: 'input',
        name: 'gerenciamento',
        message: 'O que o sistema irá gerenciar?',
        default: 'produtos'
      },
      {
        type: 'input',
        name: 'descricao',
        message: 'Descrição do projeto',
        default: 'crud de produtos'
      },
      {
        type: 'input',
        name: 'versao',
        message: 'Versão',
        default: '1.1.0'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing(){
   const elementName = this.props.elementName;
   const gerenciamento = this.props.gerenciamento;
   const descricao = this.props.descricao;
   const versao = this.props.versao;


   this.fs.copyTpl(
    `${this.templatePath()}/**/!(_)*`,
    this.destinationPath(),
    this.props
   );

   this.fs.copyTpl(
     this.templatePath('src/_element.html'),
     this.destinationPath(`src/${elementName}.html`),
     this.props
   );

   this.fs.copyTpl(
    this.templatePath('src/_element.html'),
    this.destinationPath(`src/${gerenciamento}.html`),
    this.props
  );

  this.fs.copyTpl(
    this.templatePath('src/_element.html'),
    this.destinationPath(`src/${descricao}.html`),
    this.props
  );

  this.fs.copyTpl(
    this.templatePath('nodemon.json_t'),
    this.destinationPath(this.props.elementName + '/nodemon.json')
  );

  this.fs.copyTpl(
    this.templatePath('package.json_t'),
    this.destinationPath(this.props.elementName + '/package.json')
  );

  this.fs.copyTpl(
    this.templatePath('tsconfig.json_t'),
    this.destinationPath(this.props.elementName + '/tsconfig.json')
  );

  this.fs.copyTpl(
    this.templatePath('tslint.json_t'),
    this.destinationPath(this.props.elementName + '/tslint.json')
  );

  this.fs.copyTpl(
    this.templatePath('LICENSE'),
    this.destinationPath(this.props.elementName + '/LICENSE')
  );

  this.fs.copy(
    this.templatePath('src/'),
    this.destinationPath(this.props.elementName + '/src/')
  );


 }

  install() {
    this.installDependencies();
  }
}
