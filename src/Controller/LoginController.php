<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class LoginController extends AbstractController
{

    #[Route('/', name: 'app_homepage')]
    public function homepage(): Response
    {
        // get the login error if there is one
        

        return $this->render('default.html.twig', [
            
        ]);
    }
   
    #[Route('/login', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('login/index.html.twig', [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): never
    {
        // controller can be blank: it will never be called!
        throw new \Exception('Don\'t forget to activate logout in security.yaml');
    }

    #[Route('/login', name: 'after_logout_redirect')]
    public function logoutredirect(): Response
    {
       

        return $this->render('login/index.html.twig', [
            
        ]);
    }

    #[Route('/portal/dashboard', name: 'after_login_redirect')]
    public function userDashboard(): Response
    {
        
        $this->denyAccessUnlessGranted('ROLE_USER');
        return $this->render('portal/dashboard.html.twig', [
            
        ]);
    }
}
