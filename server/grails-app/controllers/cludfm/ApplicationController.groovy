package cludfm

import grails.core.GrailsApplication
import grails.plugins.*

class ApplicationController implements PluginManagerAware {

    static String osName = System.getProperty("os.name");

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        [osName: osName, grailsApplication: grailsApplication, pluginManager: pluginManager]
    }
}
