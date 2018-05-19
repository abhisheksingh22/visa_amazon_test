VISA BDD automation test:

Pre-requisite to run the test:
1. Java 1.8 should be installed in machine
2. Eclipse with Maven and Junit
3. Chrome and Firefox installed (latest version)


How to run test:
1. Clone/Import the project in eclipse as Maven project
2. Test can be run in chrome and firefox browser
3. Open appConfig.properties file (under src/test/resources directory) and change the value of 'browser' chrome or firefox than save file
4. Open testData.properties file (under src/test/resources directory) and change the value as needed than save file
5. Now Right click on TestRunner.java file (under src/test/java/org/visa/amazon/test/testexecute directory) and run as "Junit Test"
6. Once all execution completed report will be generated under 'report/cucumber-test-report' directory to see the test report.


Answer of #2 question:
$ awk -F',' '{print "", $1}' testdata.csv | sed -z 's/\n/;/g' | sed -z 's/,//g'

Note: testdata.csv  - is the csv file name.

Out put:
 Atlanta; Atlantic City; Austin; Baltimore; Baton Rouge; Billings; Birmingham; Bismarck; Boise; Boston; Bridgeport
