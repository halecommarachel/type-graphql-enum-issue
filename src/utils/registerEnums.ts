import { registerEnumType } from "type-graphql";
import { ApplicationStatus } from "../modules/application/ApplicationStatus";

export const registerEnums = () => {
  registerEnumType(ApplicationStatus, {
    name: "ApplicationStatus",
    description: "Application status constants"
  });
};
