 <template>
    <div class="bg-white opacity-100 z-50 absolute overflow-y-auto rounded-3xl ring-white ring-2">
        <div class="w-full bg-blue-400 h-10">
            <li class="right-5 top-3 absolute pi pi-times font-bold cursor-pointer hover:text-white" @click="$emit('doClose')"></li> 
        </div>
        
        <h1>Impressum</h1>
        <p>Mohammed Jamil<br />
            Walpodenstr, 10<br />
            55116 Mainz</p>

        <h2>Kontakt</h2>
        <p>Telefon: 015209511152<br />
        E-Mail: info@mj-consultant.de</p>

        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
        26/226/78117</p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Mohammed Jamil</p>

        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zust&auml;ndig ist die Universalschlichtungsstelle des Zentrums f&uuml;r Schlichtung e.V., Stra&szlig;burger Stra&szlig;e 8, 77694 Kehl am Rhein (<a href="https://www.verbraucher-schlichter.de" rel="noopener noreferrer" target="_blank">https://www.verbraucher-schlichter.de</a>).</p>

        <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>

    </div>

 </template>
 
 <script lang="ts">
  export default {
      name: 'Impressum'
  }
</script>
<script lang="ts" setup>

 </script>
 
 <style>
 
 </style>