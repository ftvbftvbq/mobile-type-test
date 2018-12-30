import mobileMap from '../mobiletype';
function testMobile() {
    const UA = navigator && navigator.userAgent;
    let mobileType = '';
    if (!UA) {
        return '';
    }

    for (let type in mobileMap) {
        if (mobileMap.hasOwnProperty(type)) {
            if (new RegExp(type, 'gi').test(UA)) {
                mobileType = mobileMap[type];
            }
        }

    }
    return mobileType;
}
export default testMobile;
