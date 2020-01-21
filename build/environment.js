const ENV = {
    mock: {
        mock: '1'
    },
    dev: {
        baseUrl: 'dev',
    },
    sit: {
        baseUrl: 'sit',
    },
};
// 获取启动进程时传入的命令行参数
const argv = process.argv.map(i => i.replace(/-/g, ''));
const envConfig = ENV[Object.keys(ENV).find(key => argv.indexOf(key.replace(/-/g, '')) > -1)];
module.exports = Object.assign({}, envConfig);
