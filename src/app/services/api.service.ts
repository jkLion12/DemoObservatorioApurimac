import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Archivo_Entidad_AliadaI } from '../models/archivo_entidad_aliada.interface';
import { Entidad_AliadaI } from '../models/entidad_aliada.interface';
import { InfografiaI } from '../models/infografia.interface';
import { LoginI } from '../models/login.interface';
import { NoticiaI } from '../models/noticia.interface';
import { ResponseI } from '../models/response.interface';
import { UsuarioI } from '../models/usuario.interface';
import { VideoI } from '../models/video.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly noticias: NoticiaI[] = [
    {
      id: '1',
      titulo: 'Observatorio regional fortalece la articulacion territorial',
      descripcion: 'Encuentro interinstitucional para revisar rutas de proteccion y acceso a servicios.',
      fecha: '2026-05-06',
      lugar: 'Abancay',
      portada: this.asset('assets/img/Portada 1.jpg'),
    },
    {
      id: '2',
      titulo: 'Nueva campaña informativa sobre prevencion de violencia',
      descripcion: 'Acciones de sensibilizacion con enfoque territorial y participacion comunitaria.',
      fecha: '2026-04-28',
      lugar: 'Andahuaylas',
      portada: this.asset('assets/img/Portada 2.jpg'),
    },
    {
      id: '3',
      titulo: 'Mesa tecnica revisa indicadores del sistema regional',
      descripcion: 'Se actualizaron lineamientos de monitoreo para contenidos y repositorio.',
      fecha: '2026-04-19',
      lugar: 'Chincheros',
      portada: this.asset('assets/img/portada 3.jpg'),
    },
  ];

  private readonly infografias: InfografiaI[] = [
    {
      id_infografia: '1',
      titulo: 'Indicadores clave de proteccion',
      descripcion: 'Resumen visual de atencion y respuesta institucional.',
      fecha: '2026-05-01',
      lugar: 'Apurimac',
      portada: this.asset('assets/img/img3.jpg'),
    },
    {
      id_infografia: '2',
      titulo: 'Ruta de atencion regional',
      descripcion: 'Flujo simplificado de articulacion entre servicios.',
      fecha: '2026-04-17',
      lugar: 'Apurimac',
      portada: this.asset('assets/img/img1.jpg'),
    },
    {
      id_infografia: '3',
      titulo: 'Mapa de brechas territoriales',
      descripcion: 'Visualizacion de prioridades por provincia.',
      fecha: '2026-03-30',
      lugar: 'Apurimac',
      portada: this.asset('assets/img/img2.jpeg'),
    },
  ];

  private readonly videos: VideoI[] = [
    {
      id_video: '1',
      titulo: 'Campana regional de sensibilizacion',
      descripcion: 'Material audiovisual institucional.',
      fecha: '2026-05-02',
      lugar: 'Apurimac',
      portada: this.asset('assets/img/portada 4.jpg'),
    },
    {
      id_video: '2',
      titulo: 'Testimonios del territorio',
      descripcion: 'Voces de articulacion y respuesta local.',
      fecha: '2026-04-21',
      lugar: 'Abancay',
      portada: this.asset('assets/img/Portada 5.jpeg'),
    },
  ];

  private readonly usuarios: UsuarioI[] = [
    {
      id_usuario: '1',
      nombre: 'Ana',
      apellido: 'Valdivia',
      nombre_usario: 'avaldivia',
      contrasena: 'demo123',
      estado: 'Activo',
      fecha_registro: '2026-01-12',
    },
    {
      id_usuario: '2',
      nombre: 'Luis',
      apellido: 'Tapia',
      nombre_usario: 'ltapia',
      contrasena: 'demo123',
      estado: 'Activo',
      fecha_registro: '2026-02-08',
    },
  ];

  private readonly entidades: Entidad_AliadaI[] = [
    {
      id_entidad_aliada: '1',
      nombre: 'Gerencia Regional de Desarrollo Social',
      descripcion: 'Entidad articuladora del observatorio en acciones territoriales.',
      portada: this.asset('assets/img/img1.jpg'),
      fecha_registro: '2026-02-20',
    },
    {
      id_entidad_aliada: '2',
      nombre: 'Mesa de Concertacion',
      descripcion: 'Aliado para seguimiento, incidencia y articulacion intersectorial.',
      portada: this.asset('assets/img/img2.jpeg'),
      fecha_registro: '2026-03-11',
    },
  ];

  private readonly archivosEntidadAliada: Archivo_Entidad_AliadaI[] = [
    {
      id_archivo_entidad_aliada: '1',
      nombre_archivo: 'Plan de articulacion 2026',
      descripcion: 'Documento tecnico de seguimiento conjunto.',
      fecha_registro: '2026-04-12',
      ruta_archivo: '#',
      id_entidad_aliada: '1',
    },
    {
      id_archivo_entidad_aliada: '2',
      nombre_archivo: 'Directorio de servicios',
      descripcion: 'Material de consulta y coordinacion operativa.',
      fecha_registro: '2026-04-25',
      ruta_archivo: '#',
      id_entidad_aliada: '1',
    },
  ];

  loginByEmail(form: LoginI): Observable<ResponseI> {
    const ok = !!form?.usuario && !!form?.password;
    return of(
      ok
        ? { status: 'ok', result: { token: 'demo-token' } }
        : { status: 'error', result: { error_msg: 'Credenciales de demo invalidas' } },
    );
  }

  getAllNoticias(_page: number): Observable<NoticiaI[]> {
    return of(this.noticias);
  }

  getDetalleNoticia(id: any): Observable<NoticiaI> {
    return of(this.noticias.find((item) => item.id === String(id)) ?? this.noticias[0]);
  }

  postNoticia(_formData: any): Observable<ResponseI> {
    return this.ok();
  }

  putNoticia(_id: any, _formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  deleteNoticia(_id: number): Observable<any> {
    return of({ status: 'ok' });
  }

  getAllInfografias(_page: number): Observable<InfografiaI[]> {
    return of(this.infografias);
  }

  getDetalleInfografia(id: any): Observable<InfografiaI> {
    return of(this.infografias.find((item) => item.id_infografia === String(id)) ?? this.infografias[0]);
  }

  postInfografia(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  putInfografia(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  deleteInfografia(_id: any): Observable<any> {
    return of({ status: 'ok' });
  }

  getAllVideos(_page: number): Observable<VideoI[]> {
    return of(this.videos);
  }

  getDetalleVideo(id: any): Observable<VideoI> {
    return of(this.videos.find((item) => item.id_video === String(id)) ?? this.videos[0]);
  }

  postVideo(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  putVideo(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  deleteVideo(_id: any): Observable<any> {
    return of({ status: 'ok' });
  }

  getAllUsuarios(_page: number): Observable<UsuarioI[]> {
    return of(this.usuarios);
  }

  getDetalleUsuario(id: any): Observable<UsuarioI> {
    return of(this.usuarios.find((item) => item.id_usuario === String(id)) ?? this.usuarios[0]);
  }

  postUsuario(_form: any): Observable<ResponseI> {
    return this.ok();
  }

  putUsuario(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  deleteUsuario(_id: any): Observable<any> {
    return of({ status: 'ok' });
  }

  getAllEntidadAliada(_page: number): Observable<Entidad_AliadaI[]> {
    return of(this.entidades);
  }

  getDetalleEntidadAliada(id: any): Observable<Entidad_AliadaI> {
    return of(this.entidades.find((item) => item.id_entidad_aliada === String(id)) ?? this.entidades[0]);
  }

  postEntidadAliada(_form: any): Observable<ResponseI> {
    return this.ok();
  }

  putEntidadAliada(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  deleteEntidadAliada(_id: any): Observable<any> {
    return of({ status: 'ok' });
  }

  getAllArchivoEntidadAliada(_page: number, id: any): Observable<Archivo_Entidad_AliadaI[]> {
    return of(this.archivosEntidadAliada.filter((item) => item.id_entidad_aliada === String(id)));
  }

  getDetalleArchivoEntidadAliada(id: any): Observable<Archivo_Entidad_AliadaI> {
    return of(
      this.archivosEntidadAliada.find((item) => item.id_archivo_entidad_aliada === String(id)) ??
        this.archivosEntidadAliada[0],
    );
  }

  postArchivoEntidadAliada(_form: any): Observable<ResponseI> {
    return this.ok();
  }

  putArchivoEntidadAliada(_formData: FormData): Observable<ResponseI> {
    return this.ok();
  }

  deleteArchivoEntidadAliada(_id: any): Observable<any> {
    return of({ status: 'ok' });
  }

  private ok(): Observable<ResponseI> {
    return of({ status: 'ok', result: { token: 'demo-token' } });
  }

  private asset(path: string): string {
    if (typeof window !== 'undefined' && window.location?.origin) {
      return `${window.location.origin}/${path.replace(/^\/+/, '')}`;
    }

    return path;
  }
}
