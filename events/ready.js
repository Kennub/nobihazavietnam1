module.exports = (client) => {
    console.log("Đã đăng nhập với tư cách " + client.user.tag);
    client.channels.cache.get('909061144948379688').sendEmbed("#66ff33", "Welcome", "BOT đã khởi động", "", "");
};
