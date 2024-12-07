import type * as TS from 'typescript'
import {Helper} from '../lupos-ts-module'
import {ProjectHelper} from './project-helper'


/** Shared context per project. */
export interface ProjectContext {
	service: TS.LanguageService
	project: TS.server.Project
	program: TS.Program
	typeChecker: TS.TypeChecker
	helper: Helper
	projectHelper: ProjectHelper
}