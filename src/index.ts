import * as fs from "fs";
import * as path from "path";
import { renderTemplateFile } from "template-file";

export async function generate(
  exportPath: string,
  componentName: string
): Promise<string> {
  const cwd = process.cwd();
  const exportDirPath = path.resolve(cwd, exportPath);
  const templateDirPath = path.resolve(__dirname, "../template");

  const lowerName = componentName.toLowerCase();
  const upperName = componentName
    .split("-")
    .map((word: string) => {
      return word.replace(/^./, word[0].toUpperCase());
    })
    .join("");

  const exportRootPath = path.join(exportDirPath, lowerName);
  try {
    await fs.readdirSync(exportRootPath);
  } catch (err) {
    if (err.code == "ENOENT") {
      await fs.mkdirSync(exportRootPath, { recursive: true });
    }
  }

  const exportPathRiot = path.join(exportRootPath, lowerName + ".riot");
  const exportPathTypes = path.join(exportRootPath, "types.ts");

  const data = {
    lower: lowerName,
    upper: upperName
  };
  const renderedRiot = await renderTemplateFile(
    path.join(templateDirPath, "riot"),
    data
  );
  const renderedTypes = await renderTemplateFile(
    path.join(templateDirPath, "types"),
    data
  );

  await fs.writeFileSync(exportPathRiot, renderedRiot);
  await fs.writeFileSync(exportPathTypes, renderedTypes);

  return exportRootPath;
}
