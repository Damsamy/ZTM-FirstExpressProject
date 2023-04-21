function getMessages(req, res) {
    res.render('messages', {
        title: 'message to my friends',
        friend: 'Elon Musk',
    });
    //res.send('<ul><li>Hello Albert!</li></ul>');
};

function postMessages(req, res) {
    console.log('Updateing messages...');
};

module.exports = {
    getMessages,
    postMessages
};