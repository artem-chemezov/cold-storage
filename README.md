Установка на Windows:

0.Установить AndroidSDK (если не установлена):

https://androidinsider.ru/smartfony/kak-ustanovit-android-sdk-na-windows-mac-i-linux.html

1.Установить npm:

https://xn--d1acnqm.xn--j1amh/%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8/%D0%BA%D0%B0%D0%BA-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-node-js-%D0%B8-npm-%D0%BD%D0%B0-windows

2.npm install -g react-native-cli

3.git clone https://github.com/artem-chemezov/cold-storage

4. перейти в ветку BitcoreExperiments 

5.cd cold-storage

6.Создать файл local.properties по адресу cold-storage\android

7.в файле local.properties прописать путь к AndroidSDK:

sdk.dir = C:\'путь к sdk'

8.npm install

9.Перейти по адресу \node_modules\metro-config\src\defaults\blacklist.js и заменить sharedBlacklist, как в комментарии

https://stackoverflow.com/questions/58117377/react-native-start-giving-invalid-regular-expression-invalid-error

10.   .\node_modules\.bin\rn-nodeify --hack --install


Запуск приложения при подключенном через USB на Android-устройстве:

На устройстве включить режим разработчика, для этого:
 1.1 Зайти в настройки 
 
 1.2 Выбрать "О телефоне" 
 
 1.3 Нажать на кнопку "Номер сборки" 7 раз
 
 1.4 Далее в главном меню настроек появится пунк "Для разработчиков", нужно перейти в него и включить (если не включен)

 2. В папке cold-storage запускаем react-native run-android
