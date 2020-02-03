package cloudfm

import cludfm.FileManagementConfigs
import cludfm.FileManagementConfigsService
import grails.gorm.transactions.Rollback
import grails.testing.mixin.integration.Integration
import org.hibernate.SessionFactory
import spock.lang.Specification

@Integration
@Rollback
class FileManagementConfigsServiceSpec extends Specification {

    FileManagementConfigsService fileManagementConfigsService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new FileManagementConfigs(...).save(flush: true, failOnError: true)
        //new FileManagementConfigs(...).save(flush: true, failOnError: true)
        //FileManagementConfigs fileManagementConfigs = new FileManagementConfigs(...).save(flush: true, failOnError: true)
        //new FileManagementConfigs(...).save(flush: true, failOnError: true)
        //new FileManagementConfigs(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //fileManagementConfigs.id
    }

    void "test get"() {
        setupData()

        expect:
        fileManagementConfigsService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<FileManagementConfigs> fileManagementConfigsList = fileManagementConfigsService.list(max: 2, offset: 2)

        then:
        fileManagementConfigsList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        fileManagementConfigsService.count() == 5
    }

    void "test delete"() {
        Long fileManagementConfigsId = setupData()

        expect:
        fileManagementConfigsService.count() == 5

        when:
        fileManagementConfigsService.delete(fileManagementConfigsId)
        sessionFactory.currentSession.flush()

        then:
        fileManagementConfigsService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        FileManagementConfigs fileManagementConfigs = new FileManagementConfigs()
        fileManagementConfigsService.save(fileManagementConfigs)

        then:
        fileManagementConfigs.id != null
    }
}
