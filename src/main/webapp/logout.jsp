<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<%
    // A vari�vel session j� � impl�cita no JSP, ent�o n�o precisa ser declarada novamente
    if (session != null) {
        // Invalidando a sess�o para "deslogar" o usu�rio
        session.invalidate();
    }

    // Redireciona para a p�gina de login ap�s o logout
    response.sendRedirect("index.jsp");
%>
