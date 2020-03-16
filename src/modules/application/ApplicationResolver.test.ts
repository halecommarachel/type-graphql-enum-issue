import "reflect-metadata";
import prodContainer from "../../inversify.config";
import { gCall } from "../../test-utils/gCall";
import { ApplicationStatus } from "./ApplicationStatus";

const applicationMutation = `
    mutation CreateApplicationTest($input: ApplicationInput!) {
        createApplication(input: $input) {
          id
          status
          createdTime
          modifiedTime
          deletedTime
        }
    }
`;

const testApplication = {
  input: {
    status: ApplicationStatus.APPROVED
  }
};

describe("ApplicationResolver", () => {
  it("creates and then retrieves application", async () => {
    console.log(
      await gCall(
        {
          source: applicationMutation,
          variableValues: testApplication
        },
        prodContainer,
        true
      )
    );
  });
});
