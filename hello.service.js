//Registrando um serviço

module.exports = {
    name: 'hello',
    actions: {
        say(ctx) {
            return console.log('Hello from say action');
        }
    }
}