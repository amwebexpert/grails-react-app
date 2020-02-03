package cludfm

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@ToString
@EqualsAndHashCode
class FileManagementConfigs {
    String name
    String value

    static constraints = {
        name matches: /[A-Za-z].*/
    }

}
