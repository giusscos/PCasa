<script setup>

const items = ref([
    {
        "title": "Dati personali che raccogliamo",
        "paragraph": "Raccogliamo e trattiamo i seguenti dati personali:",
        "list": [
            "Dati forniti direttamente dall'utente: nome, indirizzo email, indirizzo fisico.",
            "Dati raccolti automaticamente: indirizzo IP, informazioni sul dispositivo, dati di navigazione attraverso cookie."
        ]
    },
    {
        "title": "Finalità del trattamento dei dati",
        "paragraph": "Utilizziamo i tuoi dati per le seguenti finalità:",
        "list": [
            "Gestione dell'account utente.",
            "Comunicazioni relative ai nostri servizi o risposte alle tue richieste.",
            "Adempimenti legali e obblighi normativi.",
            "Miglioramento del servizio e analisi del comportamento degli utenti."
        ]
    },
    {
        "title": "Base giuridica per il trattamento dei dati",
        "paragraph": "Il trattamento dei tuoi dati personali è basato su una delle seguenti condizioni legali:",
        "list": [
            "Consenso esplicito per finalità di marketing o invio di newsletter.",
            "Esecuzione di un contratto per fornire i servizi richiesti.",
            "Obblighi legali che siamo tenuti a rispettare."
        ]
    },
    {
        "title": "Condivisione dei dati",
        "paragraph": "I tuoi dati personali potrebbero essere condivisi con i seguenti soggetti:",
        "list": [
            "Supabase, che fornisce i nostri servizi di backend e storage.",
            "Fornitori di servizi di terze parti per l'hosting, il pagamento e l'analisi.",
            "Autorità legali, in caso di obblighi legali o regolamentari."
        ]
    },
    {
        "title": "Diritti dell'utente",
        "paragraph": "Hai il diritto di:",
        "list": [
            "Accedere ai tuoi dati personali e richiederne una copia.",
            "Richiedere la rettifica di eventuali dati inesatti.",
            "Chiedere la cancellazione dei tuoi dati, salvo obblighi legali.",
            "Opporsi al trattamento dei dati per finalità di marketing diretto.",
            "Richiedere la portabilità dei tuoi dati in formato strutturato."
        ]
    },
    {
        "title": "Sicurezza dei dati",
        "paragraph": "Ci impegniamo a proteggere i tuoi dati personali adottando le seguenti misure:",
        "list": [
            "Utilizzo di protocolli di sicurezza avanzati per il trasferimento e lo storage dei dati.",
            "Limitazione dell'accesso ai dati solo al personale autorizzato.",
            "Monitoraggio costante per prevenire accessi non autorizzati."
        ]
    },
    {
        "title": "Conservazione dei dati",
        "paragraph": "Conserviamo i tuoi dati personali per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, o come richiesto dalla legge.",
        "list": [
            "Dati conservati per il tempo strettamente necessario all'erogazione del servizio.",
            "Dati conservati per adempiere a obblighi legali o fiscali."
        ]
    },
    {
        "title": "Cookie",
        "paragraph": "Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito:",
        "list": [
            "Cookie tecnici necessari per il corretto funzionamento del sito.",
            // "Cookie di analisi per raccogliere dati statistici sull'utilizzo del sito.",
            // "Cookie di profilazione per personalizzare i contenuti e le pubblicità in base alle preferenze dell'utente."
        ]
    },
    {
        "title": "Cookie di terze parti",
        // "paragraph": "Utilizziamo cookie di terze parti per servizi esterni:",
        "paragraph": "Non utilizziamo cookie di terze parti per servizi esterni",
        "list": [
            // "Google Analytics per monitorare e analizzare il traffico sul nostro sito.",
            // "Servizi pubblicitari per personalizzare le campagne pubblicitarie.",
            // "Altri servizi esterni per l'integrazione di funzionalità aggiuntive."
        ]
    },
    {
        "title": "Gestione dei cookie",
        "paragraph": "Puoi gestire le preferenze sui cookie attraverso:",
        "list": [
            "Le impostazioni del browser, per bloccare o eliminare i cookie.",
            "Strumenti di gestione dei cookie forniti dal nostro sito, per accettare o rifiutare specifici tipi di cookie.",
            // "Servizi di terze parti per disabilitare il monitoraggio pubblicitario."
        ]
    },
    {
        "title": "Modifiche alla Privacy Policy",
        "paragraph": "Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Eventuali modifiche saranno comunicate attraverso:",
        "list": [
            "Notifiche sul sito web.",
            "Email inviate agli utenti registrati, ove necessario."
        ]
    },
    {
        "title": "Contatti",
        "paragraph": "Per domande sulla presente Privacy Policy o per esercitare i tuoi diritti, puoi contattarci tramite:",
        "list": [
            "Email: giusscos@icloud.com",
            "Modulo di contatto disponibile sul nostro sito web."
        ]
    }
]);

</script>

<template>
    <section>
        <div class="container mx-auto flex flex-col gap-4">
            <h1 class="title-standard">Privacy Policy</h1>
            <p class="paragraph-sm">
                La presente Informativa sulla Privacy descrive le modalità di raccolta, utilizzo e protezione delle
                informazioni personali raccolte quando utilizzi il nostro sito e i nostri servizi.
            </p>
            <template v-for="(item, i) in items" :key="i">
                <h2 class="title-xs">{{ i + 1 }} - {{ item.title }}</h2>
                <p class="paragraph-sm">
                    {{ item.paragraph }}
                <ul v-if="item.list.length > 0" class="list-disc px-8">
                    <template v-for="(itemList, j) in item.list" :key="j">
                        <li>{{ itemList }}</li>
                    </template>
                </ul>
                </p>
            </template>
        </div>
    </section>
</template>