const Sync = (msg, time) => new Promise(resolve => {
    setTimeout(() => {
        console.log(`${msg} `, time);
        resolve();
    }, time);
});

const doAsync = (sth, time, cb) => {
    setTimeout(() => {
        console.log(`${sth} `, time);
        console.log('A拉完了');
        cb && cb();
    }, time);
};

const A = {doAsync, Sync};
const B = {doAsync, Sync};

(async () => {
    console.log('case 1: A去来到门口');
    await A.Sync('B 要拉屎', 1000);
    console.log('B 一直等');
    await B.doAsync('A拉屎', 2000);
})();