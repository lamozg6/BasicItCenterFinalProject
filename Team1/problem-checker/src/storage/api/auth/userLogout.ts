import { authenticateUser } from 'src/utils/helpers/authenticateUser';

export async function userLogout() {
  //
  authenticateUser(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJmZTQyNTdlYy1mZmQyLTRlOWEtYjg4Zi1lNmE3NTViYjQ5ZjYiLCJuYW1lIjoiSm9obiIsImlhdCI6MTY2MDgwODcwMywiZXhwIjoxNjYwOTgxNTAzfQ.typ0h9OQ4whfQuYPCC_JtSWMGKantAKK2as46c0qzEE',
  );
}
