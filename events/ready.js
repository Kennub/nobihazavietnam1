module.exports = (client) => {
    console.log("Đã đăng nhập với tư cách " + client.user.tag);
    client.channels.cache.get('909061144948379688').send('**BOT đã khởi động! Có lẽ do BOT vừa được update hoặc có lỗi xảy ra khiến BOT bị crash**');
};
