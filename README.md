Установка окружения на OS X:

0. Установить AndroidSDK (если не установлена):

    brew install android-sdk

1. brew instal npm

2. npm install -g react-native-cli

3. git clone https://github.com/artem-chemezov/cold-storage

4. cd cold-storage

5. touch android/local.properties

6. open android/local.properties

7. в файле local.properties прописать путь к AndroidSDK:

    sdk.dir = /Users/*username*/Library/Android/sdk

8. npm install

9. ./node_modules/.bin/rn-nodeify --hack --install

Запуск приложения при подключенном через USB на Android-устройстве:

1. На устройстве включить режим разработчика, для этого:
    1.1 Зайти в настройки
    1.2 Выбрать "О телефоне"
    1.3 Нажать на кнопку "Номер сборки" 7 раз
    1.4 Далее в главном меню настроек появится пунк "Для разработчиков", нужно перейти в него и включить (если не включен)

2. В папке cold-storage запускаем react-natie run-android


