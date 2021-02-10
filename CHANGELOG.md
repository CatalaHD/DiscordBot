# CHANGELOG

\[v1.3\]

- Nova comanda `lol` amb la que pots buscar tota la informació del lol.
- Aquesta comanda té diferents subcomandes: champ, spell i item. Més info amb la comanda `help lol`.
- S'ha implementat un sistema de predicció on si es posa una lletra malament, s'avisa i es corregeix ràpidament.
- Nova comamanda `advice` que dona consells de la vida. Més info amb la comanda `help advice`.
- Nova comanda `exchange` que permet fer la conversió de monedes de forma ràpida i fàcil. Més info amb la comanda `help exchange`.
- Nou sistema de Mod per administrar els Rols. Si ets Administrador pots:
    - Afegir un Rol a un Usuari amb `addrole < @user > < @rol >`. Més info amb la comanda `help addrole`.
    - Esborrar un Rol d'un Usuari amb `removerole < @user > < @rol >`. Més info amb la comanda `help removerole`.
- Afegida nova comanda `setcounter` que adjudica el canal de text com a contador de membres.
    - El comptador s'actualitza cada 12h o manualment amb la comanda `refresh` que només poden executar els Administradors.
- Nova comanda `morsify` / `demorsify` que tradueix un text a Morse i al revés.
- S'ha afegit un Cooldown entre cada comanda. Pots veure la informació del cooldown de cada comanda amb `help < nom de la comanda>`.

\[v1.2\]

- Ara l'esborrat de missatges és més ràpid i pot arribar a esborrar fins a 100 missatges alhora contant el missatge enviat amb la comanda.
- Ara la comanda `penis` no té cap imatge d'un penis, ja que es considera contingut NFSW.

\[v1.1\]

Aqui va una llista de tots els cambis de la ultima versió del bot:

- Ara, per fi, el bot es **PÚBLIC**, per tant se'l pot convidar a qualsevol servidor.
- En quant el bot s'uneix a un canal nou, aquest envia un missatge privat amb totes les instuccions a qui l'ha convidat.
- Es poden desactivar tots els canals per defecte del bot fent servir la comanda `catasetwelcome null`
    Aquesta, ara té un nou argument opcional, que permet desadjudicar aquell canal i fer que la funció automàtica del bot quedi inhabilitada.
    En quant el bot entra en un nou canal, tots els canals són NULL per evitar spam.
    Dins d'aquest conjunt hi entren les comandes `catasetbot` i `catasetalert`.
    Recordar que aquestes comandes només poden ser executades per membres amb permís d'ADMINISTRADOR.
- Ara el prefix per defecte és `cata` així que, si el bot s'uneix al teu servidor, es farà servir aquest prefix.
- Recordar que també es pot cambiar amb la comanada `cataprefix [nou prefix]`.
- Arreglat el bug que impeia fer servir la pokedex de forma correcta.
- Arreglats bugs menors.