package cludfm

import grails.validation.ValidationException

import static org.springframework.http.HttpStatus.*

class FileManagementConfigsController {

    FileManagementConfigsService fileManagementConfigsService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond fileManagementConfigsService.list(params), model:[fileManagementConfigsCount: fileManagementConfigsService.count()]
    }

    def show(Long id) {
        respond fileManagementConfigsService.get(id)
    }

    def save(FileManagementConfigs fileManagementConfigs) {
        if (fileManagementConfigs == null) {
            render status: NOT_FOUND
            return
        }

        try {
            fileManagementConfigsService.save(fileManagementConfigs)
        } catch (ValidationException e) {
            respond fileManagementConfigs.errors, view:'create'
            return
        }

        respond fileManagementConfigs, [status: CREATED, view:"show"]
    }

    def update(FileManagementConfigs fileManagementConfigs) {
        if (fileManagementConfigs == null) {
            render status: NOT_FOUND
            return
        }

        try {
            fileManagementConfigsService.save(fileManagementConfigs)
        } catch (ValidationException e) {
            respond fileManagementConfigs.errors, view:'edit'
            return
        }

        respond fileManagementConfigs, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        fileManagementConfigsService.delete(id)

        render status: NO_CONTENT
    }
}
