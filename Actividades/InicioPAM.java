  public class InicioPAM {
    

      public static void main (String[] args)
    {
      InicioPAM obj = new InicioPAM();
     System.out.println(obj.Reglamentopoo());
     System.out.println(obj.LineamientosClasroom());
     System.out.println(obj.FechasDePariclaes());
     System.out.println(obj.PorcentajesPorParcial());
      
    }
public String Reglamentopoo()
  {
    return "1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\r\n" + //
          "2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\r\n" + //
          "inicio:7:00a.m y 14:00 p.m).\r\n" + //
          "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\r\n" + //
          "justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\r\n" + //
          "tutor para ser validados y de forma posterior emitidos).\r\n" + //
          "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\r\n" + //
          "5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\r\n" + //
          "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\r\n" + //
          "7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\r\n" + //
          "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\r\n" + //
          "9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\r\n" + //
          "una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\r\n" + //
          "10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\r\n" + //
          "11. Prohibido el uso de audífonos durante la clase.\r\n" + //
          "12. Prohibido comer y/o tomar líquidos en el salón.\r\n" + //
          "13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\r\n" + //
          "14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\r\n" + //
          "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\r\n" + //
          "15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\r\n" + //
          "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\r\n" + //
          "17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\r\n" + //
          "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.";
  }

  public String LineamientosClasroom()
  {
    return" Lineamientos de ClasRoom ";
  }
  public String  FechasDePariclaes()
  {
    return"1er Parcial 30-9-25 \n 2do Parcial 04-10-25 \n 3er Parcial 02-12-25 \n Final 08-12-25";
  }
  public String PorcentajesPorParcial()
  {
    return"\t\t1P \t2P \t3P\n Ev Conocimiento 40%  \t40% \t20% \n Ev Desempeño \t20% \t20% \t10% \n Ev Producto \t30% \t20% \t540% \n PI\t \t10% \t20% \t30% ";
  }


    }
