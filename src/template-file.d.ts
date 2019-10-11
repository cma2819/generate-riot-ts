declare module "template-file" {
  export function renderString(template: string, data: Object): string;
  export function renderTemplateFile(
    pathToTemplate: string,
    data: Object
  ): string;
}
