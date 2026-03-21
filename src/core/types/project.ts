/** 
 * INTERFACES PARA EL PORTAFOLIO
 * Define la estructura de datos para los proyectos.
 */

import React from "react";

export interface IProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
  link: string;
}

export interface IProjectImage {
  id: number;
  title: string;
  img: string;
}

export interface IProjectInfo {
  ClientHeading: string;
  CompanyInfo: { id: number; title: string; details: string; icon?: React.ReactNode }[];
  ObjectivesHeading: string;
  ObjectivesDetails: string;
  Technologies: { title: string; techs: string[] }[];
  ProjectDetailsHeading: string;
  ProjectDetails: { id: number; details: string }[];
  SocialSharingHeading: string;
  SocialSharing: { id: number; name: string; icon: React.ReactNode; url: string }[];
}

export interface IProject {
  id: number;
  title: string;
  category: string;
  img: string;
  ProjectHeader: IProjectHeader;
  ProjectImages: IProjectImage[];
  ProjectInfo: IProjectInfo;
}
