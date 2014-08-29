var i;
var mensaje=new Array();

mensaje.push("<h2>1) EL HARDWARE -PLUG AND PLAY- NO FUNCIONA  <br></h2><h1>Con el software Plug and Play (PnP), podras conectar un nuevo dispositivo en tu computadora y hacer que lo reconozca instantaneamente. Sin embargo, PnP puede detectar equivocadamente el nuevo hardware o incluso no detectarlo. Si esto sucede, haz una copia de seguridad de tu disco duro, crea un disco de arranque de emergencia y vuelve a iniciar el equipo. Si esto no funciona, el problema puede ser un conflicto en el puerto IRQ. Para averiguarlo, revisa el administrador de dispositivos. Haga clic en el dispositivo mal instalado que indica la bandera. Ahora haz clik en RECURSOS y desactiva USE LA CONFIGURACION AUTOMATICA. En TIPOS DE RECURSOS, haz clic en los puertos y bloques de memoria superior que presentan conflicto con otros dispositivos. Ahora completa EDITE EL RECURSO, haga clic en ACEPTAR y reinicia.<br> Las tarjetas ISA, Industry Standard Architecture y los recursos de la tarjeta madre tambien pueden causar problemas PnP. El sistema BIOS puedes asignar a una ranura PCI el IRQ que la tarjeta ISA ya tomo. Para solucionar este problema, intenta apagar o reasignar los recursos de la tarjeta madre a traves de la BIOS. </h1>");
mensaje.push("<h2>2) LA IMPRESORA NO IMPRIME.  <br></h2><h1>Primero realiza una impresion de prueba para asegurarte que no es problema de la impresora. Descartando esta posibilidad, hay una serie de factores que podrian causar fallas en tu impresora Los cables. Verifica las conexiones y si es posible conecta otro cable para impresora. <br>Controladores; Si la impresora que estas utilizando no esta configurada como -impresora predeterminada- o el controlador no esta instalado, la impresora puede imprimir caracteres distorsionados. Para solucionarlo, ve al administrador de programas y haz clic en GRUPO PRINCIPAL / PANEL DE CONTROL / IMPRESORAS. Marque su impresora y haga clic en ESTABLECER COMO PREDETERMINADA. Si no ves tu impresora, haga clic en AGREGAR, inserte el disco del controlador de impresoras, marca la tuya y selecciona ESTABLECER COMO PREDETERMINADA. <br>Conflictos en las aplicaciones; Si puedes imprimir desde las aplicaciones de Windows pero no desde otras aplicaciones, asegurate que la impresora este configurada dentro de esa aplicacion. <br>Puerto LPT; Si te aparece el mensaje -no se encuentra la impresora en el puerto LPT-, pudiste haber conectado la impresora en el puerto equivocado. </h1>");
mensaje.push("<h2>3) EL ESCANER NO FUNCIONA  <br></h2><h1>El principal problema de los escaners es el puerto paralelo. Si el puerto no aparece configurado correctamente en la BIOS, Sistema Basico de Entrada y Salida, puede causar problemas. Revisa la BIOS presionando SUPRIMIR al tiempo que te este dando sistema de arranque. Haz clik en SUPRIMIR mientras la memoria omite la pantalla de inicio antes que abra Windows. Revisa los recursos del puerto paralelo. puedes necesitar configurar este puerto como BIDIRECCIONAL. Tambien ten en cuenta que no funciona al tratar de utilizar la impresora y el escaner al mismo tiempo. Si este parece ser el problema, consigue un interruptor paralelo. Otro culpable puede ser el software. Algunos programas de software estan unidos a los perifericos, lo cual no es muy deseable. Trata de desinstalarlos y reinstalarlos para reparar los archivos y controladores que tienen errores. </h1>");
mensaje.push("<h2>4) EL MODEM NO RESPONDE  <br></h2><h1>Si el modem es interno, revisa que este fijo en la ranura de expansion. Si es externo, verifica que este en el puerto correcto. Luego, revise que este conectado a la linea telefonica y que la linea esta en el jack correcto. Luego revisa los prefijos especiales de marcacion y deshabilita las llamadas en espera para que no lo desconecten las llamadas que estan entrando. Si esto no soluciona el problema, ve a PROPIEDADES DEL SISTEMA / PANEL DE CONTROL y verifica las funciones de las IRQ, lineas de solicitud de interrupcion. Puede ser que tu modem esta tratando de compartir las IRQ con otro dispositivo. Por ultimo, revisa si hay conflictos de puerto COM. Por ejemplo, si estas usando un Mouse COM 1 y no el Mouse PS/2 que es mas comun, obviamente el Mouse esta ocupando ese puerto que tu modem no puede ocupar. Intenta configurar el modem para el puerto COM 2 o 4. </h1>");
mensaje.push("<h2>5) NO APARECE LA IMGEN EN LA PANTALLA O APARECE UNA GAMA LIMITADA DE COLORES  <br></h2><h1>No aparece la imagen. Revisa que la pantalla este encendida, los cables esten conectados y la configuracion de brillo y contraste este correcta. Si todo esto esta funcionando adecuadamente, cambia la pantalla por otra y de sistema de arranque al equipo. Si esto funciona, la pantalla anterior se daño. <br>Gama limitada de colores; Revisa OPCIONES DE PROPIEDADES DE LA PANTALLA / PANEL DE CONTROL. Selecciona -356 colores- en las -propiedades estandar-. Si seleccionas -16 colores- la pantalla mostrara una gama limitada de colores. Si la pantalla esta completamente blanca, la tarjeta de video puede estar dañada. </h1>");

for(i=0 ;i<=4;i++)
{

document.write(mensaje[i])


}