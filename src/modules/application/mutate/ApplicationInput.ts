import { Field, InputType } from "type-graphql";
import { Application } from "../../../entities/Application";
import { ApplicationStatus } from "../../application/ApplicationStatus";

@InputType()
export class ApplicationInput implements Partial<Application> {
  @Field(type => ApplicationStatus)
  status: ApplicationStatus;
}
