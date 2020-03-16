import { injectable } from "inversify";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Application } from "../../entities/Application";
import { Context } from "../../types/Context";
import { ApplicationInput } from "./mutate/ApplicationInput";

@Resolver()
@injectable()
export class ApplicationResolver {
  @Query(() => Application, {
    description: "Get Application by Id.",
    nullable: true
  })
  @Authorized()
  async getApplication(
    @Arg("id") id: string,
    @Ctx() context: Context
  ): Promise<Application | null> {
    return context.loaders.applicationLoader.load(id);
  }

  @Mutation(() => Application, {
    description: "Create new Application."
  })
  @Authorized()
  async createApplication(
    @Arg("input") input: ApplicationInput,
    @Ctx() _context: Context
  ): Promise<Application> {
    const application = new Application();
    application.id = "123";
    application.status = input.status;
    return application;
  }
}
