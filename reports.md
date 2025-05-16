- Explica con tus palabras que es una API

Una API es una conjunto de definiciones y reglas que permiten que dos sistemas se comuniquen entre si, es una especie de contrato que establece como una aplicacion puede interactuar con otra, normalmente a traves de solicitudes HTTP.

Utilizar APIs permite integrar servicios externos, separar resposabilidades y construir arquitecturas modulares y escalables.

- En caso de haber utilizado un patron de componentes, justifica su uso y porque elegiste ese.

En esta implementacion utilice el patron de componentes presentacionales. 
Este patron se basa en la separacion de responsabilidades entre componentes UI y aquellos que manejan la logica de negocio o estado. 

Utilice este patron porque permite modularidad y reutilizacion, al mantener los componentes desacoplados de la logica, pueden ser facilmente reautilizados en distintos contextos, sin generar dependencias, ademas facilita el testin unitario, ya que su comportamiento depende exclusivamenete de las props que reciben. 

En resumen, elegi este patron porque me permite escalar el software de forma ordenada, optimizar la mantenibilidad del codigo y aplicar principios solidos como Single Responsibility Principle y separation of concerns, fundamentales en arquitectura de componentes moderna.


- ¿Que patrones de diseno conoces?, cuales haz aplicado, explica porque lo utilizaste y como te ayudo a resolver un problema o tuvo una ventaja sobre otros.

Conozco y he aplicado varios patrones de softare, entre los más relevantes: 

Repository Pattern:
Para desacoplar el acceso a datos de la logica del negocio, permitiendo cambiar facilmente la fuente de datos sin afectar otras capas.

Singleton:
Para controlar el acceso a instancias unicas de clases, util en configuraciones globales.

Observer/Publisher-Suscriber
Cuando se requiere comunicacion entre diferentes partes del sistemas, como eventos o notificaciones.

Estos patrones me han permitido resolver problemas relacionados con
la escalabilidad, la complejidad en el manejo de estados o la necesidad de desacoplar dependencias criticas, facilitando el mantenimiento del software

Dependencias instaladas:

React Icons
Para los íconos, opté por React Icons porque ofrece una gran variedad de bibliotecas populares (como FontAwesome, Material Icons, etc.) con un sistema de importación optimizado que permite cargar solo los íconos que realmente se usan.

React Hook Form
Elegí esta librería para el manejo de formularios debido a su excelente performance, bajo re-rendering y soporte para validación nativa. Es una alternativa más ligera y eficiente en comparación con otras.


React Router DOM
Utilicé esta librería para gestionar la navegación entre vistas. 
Elegí React Router por su integración nativa con React y por permitir rutas anidadas, navegación programática.


