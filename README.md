Установка на OS X:

0. Установить AndroidSDK (если не установлена):

    brew install android-sdk

1. brew install npm

2. npm install -g react-native-cli

3. git clone https://github.com/artem-chemezov/cold-storage

4. cd cold-storage

5. touch android/local.properties

6. open android/local.properties

7. в файле local.properties прописать путь к AndroidSDK:

    sdk.dir = /Users/*username*/Library/Android/sdk

8. npm install

9. ./node_modules/.bin/rn-nodeify --hack --install




Установка на Windows:

0. Установить AndroidSDK (если не установлена):

1. Установить npm 

3. git clone https://github.com/artem-chemezov/cold-storage

4. cd cold-storage

5. Создать файл local.properties по адресу cold-storage\android

6. в файле local.properties прописать путь к AndroidSDK:

    sdk.dir = C:\\Users\\"username"\\AppData\\Local\\Android\\sdk

7. npm install

8. Перейти по адресу \node_modules\metro-config\src\defaults\blacklist.js 
и заменить этот код
 
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

на этот

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

9.\node_modules\.bin\rn-nodeify --hack --install





