import * as repository from "./repository";

export const operationsByAnAccountHolder = async ({
  cui,
  nombre,
  apellido,
}) => {
  const results = await repository.operationsByAnAccountHolder({
    cui,
    nombre,
    apellido,
  });
  return results;
};

export const totalCreditsAndDebitsByInstitution = async ({
  institucion,
}) => {
  const results = await repository.totalCreditsAndDebitsByInstitution({
    institucion,
  });
  return results;
};

export const accounts = async() => {
  const results = await repository.accounts();
  return results;
}

export const institutions = async() => {
  const results = await repository.institutions();
  return results;
}

export const transactionsByCui = async({ cui }) => {
  const results = await repository.transactionsByCui({ cui });
  return results;
}
