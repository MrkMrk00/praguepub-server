# PraguePub server

## Konfigurace

Ke spuštění serveru je třeba mít nainstalovaný **Node** (a **npm**).

### Build serveru a spuštění
```
git clone https://gitlab.com/mhau/praguepub-registration-server/ prague-pub-server
cd prague-pub-server
npm install
npm run start
```
Server by se měl spustit na portu 3021 (je možné změnit v src/index.js).\
-> k serveru je možné se dostat přes [http://localhost:3021/](http://localhost:3021/)

### Dev konfigurace
Projekt je možné spustit s automatickou kompilací a restartováním při změně souboru. 

```
npm run dev
```
Tento příkaz spustí server zapomocí **babel-node** interpreteru spolu s knihovnou **Nodemon**, která vždy pří změně
souboru server restartuje.

Skripty ve složce src/publicScripts/ nejsou v tomto případě automaticky kompilovány, tudíž je při změně kódu v této složce celý projekt vybuildit (nebo alespoň tuto složku).

```
npm run build:public
```

## Funkcionalita
### Manipulace hesla
Server akceptuje POST requesty na adrese */register*

Body requestu je JSON objekt

**Formát:**
```json
{
    "username": *přihlašovací jméno uživatele*,
    "password": *heslo uživatele (nešifrované)*
}
```
Heslem uživatele je následně zapomocí algoritmu AES zašifrováno heslo databázového uživatele. *src/AesUtil.js*

**Formát zašifrovaného hesla:**
- inicializační vektor :: salt :: zašifrované heslo 

Toto heslo je následně uloženo do kolekce v MongoDB users.users

### Webový interface
Na indexu serveru je jednoduchý formulář pro registraci uživatele.