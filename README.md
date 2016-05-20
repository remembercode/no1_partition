#how to use

var partition = require('no1_partition');
var infoObject = partition.infoSync();
var infoJsonString = JSON.stringify(infoObject);
console.log(infoJsonString);

infoJsonString content like this:

[
    {
        "name": "C:",
        "fileSystem": "NTFS",
        "sizeB": 88374878208,
        "sizeKB": 86303592,
        "sizeMB": 84280.8515625,
        "sizeGB": 82.3055191040039,
        "freeB": 214708514816,
        "freeKB": 209676284,
        "freeMB": 204761.99609375,
        "freeGB": 199.96288681030273
    },
    {
        "name": "D:",
        "fileSystem": "NTFS",
        "sizeB": 79650402304,
        "sizeKB": 77783596,
        "sizeMB": 75960.54296875,
        "sizeGB": 74.18021774291992,
        "freeB": 214748360704,
        "freeKB": 209715196,
        "freeMB": 204799.99609375,
        "freeGB": 199.99999618530273
    },
    {
        "name": "E:",
        "fileSystem": "NTFS",
        "sizeB": 17964236800,
        "sizeKB": 17543200,
        "sizeMB": 17132.03125,
        "sizeGB": 16.730499267578125,
        "freeB": 82058407936,
        "freeKB": 80135164,
        "freeMB": 78256.99609375,
        "freeGB": 76.42284774780273
    },
    {
        "name": "F:",
        "fileSystem": "NTFS",
        "sizeB": 139737935872,
        "sizeKB": 136462828,
        "sizeMB": 133264.48046875,
        "sizeGB": 130.14109420776367,
        "freeB": 255999209472,
        "freeKB": 249999228,
        "freeMB": 244139.87109375,
        "freeGB": 238.41784286499023
    },
    {
        "name": "Z:",
        "fileSystem": "NTFS",
        "sizeB": 973306380288,
        "sizeKB": 950494512,
        "sizeMB": 928217.296875,
        "sizeGB": 906.4622039794922,
        "freeB": 1000167436288,
        "freeKB": 976726012,
        "freeMB": 953833.99609375,
        "freeGB": 931.4785118103027
    }
]