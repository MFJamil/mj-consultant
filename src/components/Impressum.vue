 <template>
    <SlidePanel>
        <template #content>
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

        </template>
    </SlidePanel>
 </template>
 
 <script lang="ts">
  
  export default {
      name: 'Impressum'
  }
</script>
<script lang="ts" setup>
import SlidePanel from './SlidePanel.vue';
 </script>
 
 <style>
 
 </style>