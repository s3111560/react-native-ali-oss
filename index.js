import {
    NativeModules,
    DeviceEventEmitter
} from 'react-native';

const AliyunOSS = NativeModules.AliyunOSSModule;

export let initWithAppKey =function(endpoint,accessKeyId,accessKeySecret,securityToken,expiration) {
    AliyunOSS.initWithAppKey(endpoint,accessKeyId,accessKeySecret,securityToken,expiration)
}
export let upload= async function(bucketName, objectKey, uploadFilePath) {
    await AliyunOSS.upload(bucketName, objectKey, uploadFilePath)
}
export let presignConstrainURL= async function(bucketName, objectKey) {
    return await AliyunOSS.presignConstrainURL(bucketName, objectKey)
}
