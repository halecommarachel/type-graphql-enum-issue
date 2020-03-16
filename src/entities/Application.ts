import { Field, ObjectType } from "type-graphql";
import { ApplicationStatus } from "../modules/application/ApplicationStatus";

@ObjectType()
export class Application {
  @Field()
  id: string;

  @Field(type => ApplicationStatus)
  status: ApplicationStatus;
}
