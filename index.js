const { ServiceBroker } = require('moleculer');
const path = require('path');

(async() => {
    const broker  = new ServiceBroker({
        logger: console,
        transporter: null,
        hotReload: true
    });
    
    broker.loadService(path.join(__dirname, './hello.service.js'));
    
    await broker.start();
    
    //Chamando o serviço
    broker.call('hello.say');
        
})()
