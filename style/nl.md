# Dutch (nl)

## Voice

- Address the user as **je** (*jij* only for emphasis, *jouw* or *je* as the possessive): *Log in*,
  *Kies een profiel*, *Probeer het opnieuw*. Never *u*. Text that speaks to a group still
  addresses the reader, or uses the infinitive (*Samen kijken, waar je ook bent*).
- Buttons, menu items and the choices of a picker use the infinitive, consistently with the
  strings beside them: *Annuleren*, *Opslaan*, *Opnieuw proberen*, *Ondertitelinstellingen
  gebruiken*. Instructions in sentences use the imperative: *Kies een bibliotheek*.
- An on/off value is *Aan* / *Uit*, whatever it switches.
- Status words on one screen use the same form: a request's status is a past participle
  (*Aangevraagd*, *Goedgekeurd*, *Afgewezen*, *Mislukt*), also in titles and labels on the same
  screen.
- Sentence case, like the English. Dutch doesn't capitalize nouns. Feature names keep their own
  capitals (*Watch Party*, *Autoscan*). English all-caps labels stay all caps (*LIVE*).
- A library type or tab name used as a common noun inside a sentence is lowercase (*geen
  filmbibliotheken*), not quoted as the tab name.
- Quotation marks “…”. Write the ellipsis as one character …. Use the typographic apostrophe ’
  also in plurals and possessives (*foto’s*, *menu’s*, *video’s*, *Silo’s*).
- Be gender-neutral where it reads naturally: *persoon*, *gast*, *wie de party organiseert*.

## Vocabulary

- Standard Dutch that reads naturally in the Netherlands and Flanders; avoid words only one of
  them uses.
- Established Dutch UI terms where they are common: *Instellingen*, *ondertitels*,
  *bibliotheek*, *downloaden*. Keep product and feature names from the glossary.
- *telefoon* for a phone, *tablet*, *tv* (lowercase, the Dutch spelling) for the television as
  a device, *afstandsbediening* for the remote.
- On TV, prefer *Selecteer* to *Druk op*; for a button on the remote, write *Druk op OK*. A
  remote button is the object of *Druk op*, not the subject: *Druk op Rechts om het paneel te
  openen*.
- Write compounds as one word, as Dutch requires (*ondertitelinstellingen*, *afspeelsnelheid*),
  never with an English-style space. Use a hyphen after an abbreviation or a multi-word name,
  and where vowels would clash (*tv-serie*, *e-mailadres*, *Watch Party-uitnodiging*,
  *media-aanvragen*).
- English IT words that Dutch uses as is stay English, written as Dutch spells them: *server*,
  *stream*, *account*, *back-up*, *plug-in*, *log*.

## Terms that depend on context

| English | Dutch |
|---|---|
| request (a media request) / an HTTP or API request | *aanvraag*; to request: *aanvragen* / *verzoek* |
| Settings (a screen, tab or menu) / a setting | *Instellingen* / *instelling* or *optie* |
| add / delete / remove / clear | *toevoegen* / *verwijderen* / *verwijderen* or *weghalen* / *wissen* |
| show (verb) / TV show | *tonen*, *weergeven* / *serie* |
| source | *bron* |
| session (sign-in, playback) | *sessie* |
| party (a Watch Party) | *de Watch Party*; host: *host* or *wie de party organiseert*; guest: *gast* |
| stream (one playback) | *stream*; streaming: *streaming*; to stream: *streamen* |
| worker (remote server process) | *worker*, a technical term; *node* for a node |
| queue / schedule | *wachtrij* / *plannen*, *planning* |
| sync | *synchroniseren*, *synchronisatie* |
| rating (stars) / rating (age) | *beoordeling* / *leeftijdsclassificatie* |
| cast (people) | *cast* |
| buffering | *Bufferen* (status) |
| pair (a device) | *koppelen*, *koppeling* |
| Couldn't… | *Kan … niet …* or *… is mislukt* |
| Try again (sentence) / Retry (button) | *Probeer het opnieuw.* / *Opnieuw proberen* |
| Auto (the name of a quality or mode option) | *Auto* inside a sentence names the option (*De kwaliteit Auto speelt …*); as a choice in a list, *Automatisch* where it fits |

The glossary (`glossary.csv`) holds the fixed renderings and the names never translated.

## Keep as written

Code, file paths, URLs, environment variable and setting names, text in backticks, hostnames,
units (*Mbps*, *kbps*, *GB*), resolutions (*1080p*), codec, protocol and format names (in their
usual capitals, *HTTP*, *HLS*, even where the English lowercases them), and keyboard keys
(*Space*, *Enter*).

When a sentence names another screen, button, row, task or setting, use the Dutch label that
element has in the catalog, not the English one. The glossary lists the names that recur.

## Plurals and numbers

- Plurals: `one other`.
- Where the English prints `{count_text}` instead of `#`, keep `{count_text}`: the app formats
  that number.
- Digits come from the app; don't write numbers out or change separators.
- A number and its unit are separated by a space: *24 u*, *2 u 4 min*, *45 sec*, *211 ms*,
  *7 d*, also after a number placeholder (*{minutes} min*). Never *m* for minutes. In a short
  title where a line break would strand the unit, use a no-break space (U+00A0). An example of
  what to type into a field (*24h*, *30d, 2w, 6m*) is input syntax and stays exactly as written.

## Length

Dutch runs long. Keys with `maxLength` appear on TV and small controls. Stay within it: choose a
shorter word or a shorter compound over an abbreviation, and drop articles before abbreviating.

## Season and episode codes

Every season and episode code uses the same letters across the catalog (codes, tags, captions,
play buttons, Watch Party lines, notifications, admin pages): *S{season}A{episode}*,
*S{season} · A{episode}*, *S{season}:A{episode}*, *A{episode}* (A for aflevering, never E). Keep
the English separators (none, · or :).
