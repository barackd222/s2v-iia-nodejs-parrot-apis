# s2v-iia-nodejs-parrot-apis
s2v-iia-nodejs-parrot-apis

Note: I did not include a package.json as there is a known bug when applying the rolling-spider libraries below. Instead follow the next 5 steps:


1.	Create a folder where you want to download the Rolling-spider NPM nodules:

```
mkdir s2v-iia-nodejs-parrot-apis && cd s2v-iia-nodejs-parrot-apis
```


2.	Install pre-requites (Bluetooth Noble pre-requites as https://github.com/sandeepmistry/noble#prerequisites ):

```
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev build-essential g++
```

3.	Install the Rolling-Spider node module

```
npm install rolling-spider
```

If this completes successfully, continue with the supporting modules below:

```
npm install temporal express
```

At the end of this step, you should have 3 modules installed (express, rolling-spider and temporal)

Note: If you find any missing libraries while installing the previous modules, then go to number 4. Otherwise jump to number 5.

4.	I don’t think the following is required, but I had to do it as part of debugging the previous error. Please try not to run these commands and go directly to (3) – If you see any trouble, then come back and install these modules.

```
sudo npm install -g node-gyp
sudo apt-get install nodejs-legacy
sudo apt-get install bluez-hcidump
sudo hcidump -t -x
```

5.	As indicated in bug https://github.com/voodootikigod/node-rolling-spider/issues/74  - If you get an error with your peripheral, go into lib/drone.js and add this line to 202

```
this.ble.stopScanning();
under
this.peripheral = peripheral;
```

6. Finally run your application: 

   ``` 
   node app  
   ```
     
It will show you the port where it is running. Then just start calling its APIs.

Any question or comment please drop an email.

Enjoy!
