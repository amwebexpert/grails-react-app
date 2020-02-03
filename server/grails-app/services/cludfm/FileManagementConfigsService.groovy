package cludfm

import grails.gorm.services.Service

@Service(FileManagementConfigs)
interface FileManagementConfigsService {

    FileManagementConfigs get(Serializable id)

    List<FileManagementConfigs> list(Map args)

    Long count()

    void delete(Serializable id)

    FileManagementConfigs save(FileManagementConfigs fileManagementConfigs)

}