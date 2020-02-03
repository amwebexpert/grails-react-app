package cloudfm

import cludfm.FileManagementConfigsService

class PrinterJob {
    static triggers = {
      simple repeatInterval: 5000l // execute job once in 5 seconds
    }

    FileManagementConfigsService fileManagementConfigsService

    def execute() {
        println "There are ${fileManagementConfigsService.count()} elements"
    }
}
