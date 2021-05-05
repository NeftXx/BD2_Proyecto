import { cassandra } from "@shared/infrastructure/database";

export const operationsByAnAccountHolder = async ({
  cui,
  nombre,
  apellido,
}) => {
  const query = `
select *
from transacciones
where
cui = ? and
nombre = ? and
apellido = ?
ALLOW FILTERING;
`;
  const result = await cassandra.execute(query, [cui, nombre, apellido]);

  return result.rows;
};

export const totalCreditsAndDebitsByInstitution = async ({ institucion }) => {
  const queryTotalCreditos = `
select SUM(monto_transferido) AS creditos
from transacciones
WHERE
institucion = ? and
tipo_accion = 'Credito' ALLOW FILTERING;
`;

  const queryTotalDebitos = `
select SUM(monto_transferido) AS debitos
from transacciones
WHERE
institucion = ? and
tipo_accion = 'Debito' ALLOW FILTERING;
`;

  const resultTotalCreditos = await cassandra.execute(queryTotalCreditos, [
    institucion,
  ]);
  const resultTotalDebitos = await cassandra.execute(queryTotalDebitos, [
    institucion,
  ]);

  const { creditos } = resultTotalCreditos.rows[0];
  const { debitos } = resultTotalDebitos.rows[0];

  return { creditos, debitos };
};

export const accounts = async () => {
  const query = `select * from cuentas;`;
  const results = await cassandra.execute(query);
  return results.rows;
};

export const institutions = async () => {
  const query = `select * from instituciones`;
  const results = await cassandra.execute(query);
  return results.rows;
};
