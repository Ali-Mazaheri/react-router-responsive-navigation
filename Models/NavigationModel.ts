export class NavigationModel {

  constructor(
    public iconClass: string,
    public title: string,
    public relativeLink: string,
    public subMenue: NavigationModel[] = []) { }
}