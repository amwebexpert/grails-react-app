package cludfm

class BootStrap {

    static INITIAL_CONFIGS = ['rootDir': '/home', 'showHiddenElements': 'false']

    FileManagementConfigsService fileManagementConfigsService

    def init = { servletContext ->
        println "Starting $servletContext"

        INITIAL_CONFIGS.forEach { key, value ->
            fileManagementConfigsService.save new FileManagementConfigs(name: key, value: value)
        }

        fileManagementConfigsService.list().each {
            println it
        }
    }

    def destroy = {
    }

}
