import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { allPages, pageMap } from './demo-data';

@Component({
  selector: 'app-view-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="page" [class]="'page accent-' + page().accent">
      <header class="hero">
        <div class="hero-copy">
          <span class="eyebrow">{{ page().eyebrow }}</span>
          <h1>{{ page().title }}</h1>
          <p>{{ page().summary }}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" [routerLink]="page().samplePath">Vista actual</a>
            <a class="btn btn-secondary" [routerLink]="relatedLink()">Ver otra vista</a>
          </div>
        </div>
        <div class="hero-panel">
          @for (metric of page().metrics; track metric.label) {
            <div class="metric-card">
              <span>{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
            </div>
          }
        </div>
      </header>

      <section class="content-grid">
        <div class="cards-panel surface">
          <div class="section-head">
            <span>Diseño propuesto</span>
            <h2>Bloques visuales para esta vista</h2>
          </div>
          <div class="cards-grid">
            @for (card of page().cards; track card.title) {
              <article class="content-card">
                <span class="card-kicker">{{ card.subtitle }}</span>
                <h3>{{ card.title }}</h3>
                <p>{{ card.detail }}</p>
              </article>
            }
          </div>
        </div>

        <aside class="side-panel surface">
          <div class="section-head">
            <span>Checklist demo</span>
            <h2>Qué se muestra aquí</h2>
          </div>
          <ul class="bullet-list">
            @for (bullet of page().bullets; track bullet) {
              <li>{{ bullet }}</li>
            }
          </ul>

          @if (page().fields?.length) {
            <div class="field-list">
              @for (field of page().fields!; track field.label) {
                <div class="field-item">
                  <span>{{ field.label }}</span>
                  <strong>{{ field.value }}</strong>
                </div>
              }
            </div>
          }
        </aside>
      </section>

      @switch (page().kind) {
        @case ('home') {
          <section class="surface showcase">
            <div class="section-head">
              <span>Recorrido completo</span>
              <h2>Todas las vistas incluidas en la demo</h2>
            </div>
            <div class="route-grid">
              @for (item of pages; track item.key) {
                <a class="route-tile" [routerLink]="item.samplePath">
                  <span>{{ item.eyebrow }}</span>
                  <strong>{{ item.label }}</strong>
                  <small>{{ item.path }}</small>
                </a>
              }
            </div>
          </section>
        }
        @case ('listing') {
          <section class="surface preview-block">
            <div class="section-head">
              <span>Vista catálogo</span>
              <h2>Listado estático propuesto</h2>
            </div>
            <div class="gallery-grid">
              @for (card of page().cards; track card.title) {
                <article class="gallery-card">
                  <div class="thumb"></div>
                  <div>
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.detail }}</p>
                  </div>
                </article>
              }
            </div>
          </section>
        }
        @case ('detail') {
          <section class="surface detail-layout">
            <div class="detail-cover"></div>
            <div class="detail-body">
              <div class="section-head">
                <span>Ficha detallada</span>
                <h2>Presentación estática de contenido</h2>
              </div>
              <p>La demo muestra cómo podría verse el detalle con mejor respiración visual, jerarquía más clara y acciones mejor ubicadas.</p>
              <div class="detail-meta">
                @for (metric of page().metrics; track metric.label) {
                  <div class="meta-chip">{{ metric.label }}: {{ metric.value }}</div>
                }
              </div>
            </div>
          </section>
        }
        @case ('dashboard') {
          <section class="surface dashboard-grid">
            <article class="mini-chart">
              <div class="section-head">
                <span>Pulso editorial</span>
                <h2>Actividad semanal</h2>
              </div>
              <div class="bars">
                <span style="height: 46%"></span>
                <span style="height: 72%"></span>
                <span style="height: 58%"></span>
                <span style="height: 88%"></span>
                <span style="height: 67%"></span>
                <span style="height: 93%"></span>
              </div>
            </article>
            <article class="mini-table">
              <div class="section-head">
                <span>Actividad reciente</span>
                <h2>Resumen operativo</h2>
              </div>
              <div class="activity-item"><strong>Hoy</strong><span>3 noticias actualizadas</span></div>
              <div class="activity-item"><strong>Hoy</strong><span>1 video programado</span></div>
              <div class="activity-item"><strong>Ayer</strong><span>2 aliados validados</span></div>
            </article>
          </section>
        }
        @case ('form') {
          <section class="surface form-layout">
            <div class="form-mock">
              <div class="form-row">
                <span class="input wide"></span>
                <span class="input"></span>
              </div>
              <div class="form-row">
                <span class="input"></span>
                <span class="input"></span>
              </div>
              <div class="form-row">
                <span class="textarea"></span>
              </div>
              <div class="form-actions">
                <span class="btn ghost">Guardar</span>
                <span class="btn primary-fill">Publicar</span>
              </div>
            </div>
            <div class="preview-note">
              <div class="section-head">
                <span>Enfoque de UI</span>
                <h2>Formulario más legible</h2>
              </div>
              <p>La maqueta organiza campos, preview y acciones en una sola lectura. Es ideal para demo porque muestra estructura sin depender de lógica real.</p>
            </div>
          </section>
        }
        @case ('table') {
          <section class="surface table-layout">
            <div class="section-head">
              <span>Listado administrativo</span>
              <h2>Tabla demo</h2>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    @for (column of page().table?.columns ?? []; track column) {
                      <th>{{ column }}</th>
                    }
                  </tr>
                </thead>
                <tbody>
                  @for (row of page().table?.rows ?? []; track $index) {
                    <tr>
                      @for (cell of row; track $index) {
                        <td>{{ cell }}</td>
                      }
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </section>
        }
        @case ('login') {
          <section class="surface login-layout">
            <div class="login-card">
              <span class="eyebrow">Ingreso demo</span>
              <h2>Credenciales institucionales</h2>
              <div class="login-field"></div>
              <div class="login-field"></div>
              <div class="form-actions">
                <span class="btn primary-fill full">Ingresar</span>
              </div>
            </div>
            <div class="login-copy">
              <div class="section-head">
                <span>Confianza visual</span>
                <h2>Acceso más moderno</h2>
              </div>
              <p>La propuesta elimina saturación visual y refuerza percepción institucional con mejor contraste, espaciado y foco.</p>
            </div>
          </section>
        }
      }
    </article>
  `,
  styles: `
    :host {
      display: block;
    }

    .page {
      display: grid;
      gap: 1.5rem;
    }

    .surface {
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 28px;
      background: rgba(255, 255, 255, 0.86);
      backdrop-filter: blur(18px);
      box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
      padding: 1.5rem;
    }

    .hero {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 1.25rem;
    }

    .hero-copy,
    .hero-panel,
    .cards-grid,
    .route-grid,
    .gallery-grid,
    .dashboard-grid,
    .content-grid,
    .detail-layout,
    .form-layout,
    .login-layout {
      display: grid;
      gap: 1rem;
    }

    .hero-copy,
    .hero-panel {
      border-radius: 30px;
      padding: 1.5rem;
      min-height: 100%;
    }

    .hero-copy {
      background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(234, 88, 12, 0.14));
    }

    .hero-panel {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(240, 249, 255, 0.9));
      align-content: start;
    }

    .eyebrow,
    .section-head span,
    .card-kicker,
    .route-tile span {
      display: inline-flex;
      width: fit-content;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-size: 0.72rem;
      font-weight: 700;
      color: #0f766e;
    }

    h1,
    h2,
    h3,
    strong {
      font-family: Cambria, Georgia, serif;
    }

    h1 {
      margin: 0.4rem 0 0.75rem;
      font-size: clamp(2rem, 4vw, 3.8rem);
      line-height: 0.95;
      color: #1f2937;
    }

    h2 {
      margin: 0.2rem 0 0;
      font-size: 1.5rem;
      color: #111827;
    }

    h3 {
      margin: 0;
      font-size: 1.1rem;
      color: #111827;
    }

    p,
    li,
    td,
    th,
    small,
    span,
    a {
      font-family: "Segoe UI Variable", "Trebuchet MS", sans-serif;
    }

    p {
      margin: 0;
      color: #475569;
      line-height: 1.7;
    }

    .hero-actions,
    .detail-meta,
    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1.25rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0.8rem 1.2rem;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 700;
    }

    .btn-primary,
    .primary-fill {
      background: linear-gradient(135deg, #0f766e, #ea580c);
      color: white;
    }

    .btn-secondary,
    .ghost {
      border: 1px solid rgba(15, 118, 110, 0.16);
      background: rgba(255, 255, 255, 0.78);
      color: #0f172a;
    }

    .metric-card,
    .content-card,
    .route-tile,
    .gallery-card,
    .field-item,
    .meta-chip,
    .activity-item,
    .login-card {
      border-radius: 22px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.88);
    }

    .metric-card {
      padding: 1rem 1.1rem;
      display: grid;
      gap: 0.3rem;
    }

    .metric-card span,
    .field-item span {
      color: #64748b;
      font-size: 0.85rem;
    }

    .metric-card strong {
      font-size: 1.5rem;
      color: #0f172a;
    }

    .content-grid {
      grid-template-columns: 1.5fr 0.9fr;
      align-items: start;
    }

    .cards-grid,
    .route-grid,
    .gallery-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .content-card,
    .route-tile,
    .gallery-card {
      padding: 1.15rem;
      text-decoration: none;
    }

    .route-tile strong,
    .field-item strong {
      color: #0f172a;
    }

    .route-tile small {
      color: #64748b;
      margin-top: 0.35rem;
    }

    .bullet-list {
      margin: 0;
      padding-left: 1rem;
      display: grid;
      gap: 0.7rem;
      color: #334155;
    }

    .field-list {
      display: grid;
      gap: 0.75rem;
      margin-top: 1.25rem;
    }

    .field-item {
      padding: 0.95rem 1rem;
      display: grid;
      gap: 0.3rem;
    }

    .thumb,
    .detail-cover {
      min-height: 180px;
      border-radius: 20px;
      background:
        radial-gradient(circle at top left, rgba(255, 255, 255, 0.65), transparent 30%),
        linear-gradient(135deg, #0f766e, #f59e0b 55%, #ea580c);
    }

    .gallery-card,
    .detail-layout,
    .dashboard-grid,
    .form-layout,
    .login-layout {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .detail-body,
    .preview-note,
    .login-copy {
      display: grid;
      gap: 1rem;
      align-content: start;
    }

    .meta-chip {
      padding: 0.8rem 1rem;
    }

    .bars {
      display: flex;
      align-items: end;
      gap: 0.65rem;
      min-height: 220px;
      padding-top: 1rem;
    }

    .bars span {
      flex: 1;
      border-radius: 999px 999px 12px 12px;
      background: linear-gradient(180deg, #0f766e, #ea580c);
    }

    .activity-item {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .form-mock {
      display: grid;
      gap: 0.9rem;
    }

    .form-row {
      display: grid;
      gap: 0.9rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .input,
    .textarea,
    .login-field {
      display: block;
      border-radius: 18px;
      background: linear-gradient(180deg, rgba(241, 245, 249, 0.95), rgba(226, 232, 240, 0.95));
      border: 1px solid rgba(148, 163, 184, 0.18);
    }

    .input {
      min-height: 56px;
    }

    .input.wide,
    .textarea {
      grid-column: 1 / -1;
    }

    .textarea {
      min-height: 170px;
    }

    .primary-fill.full {
      width: 100%;
    }

    .login-card {
      padding: 1.5rem;
      display: grid;
      gap: 0.85rem;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.94));
    }

    .login-field {
      min-height: 58px;
    }

    .table-wrap {
      overflow-x: auto;
      border-radius: 22px;
      border: 1px solid rgba(15, 23, 42, 0.08);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: rgba(255, 255, 255, 0.92);
    }

    th,
    td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(148, 163, 184, 0.18);
    }

    th {
      color: #334155;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    td {
      color: #0f172a;
    }

    @media (max-width: 1100px) {
      .hero,
      .content-grid,
      .cards-grid,
      .route-grid,
      .gallery-grid,
      .dashboard-grid,
      .detail-layout,
      .form-layout,
      .login-layout {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 720px) {
      .surface,
      .hero-copy,
      .hero-panel {
        padding: 1rem;
        border-radius: 22px;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ViewPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly pages = allPages;

  readonly page = computed(
    () => pageMap.get(this.route.snapshot.data['pageKey']) ?? allPages[0],
  );

  relatedLink(): string {
    const currentIndex = this.pages.findIndex((page) => page.key === this.page().key);
    const nextPage = this.pages[(currentIndex + 1) % this.pages.length];
    return nextPage.samplePath;
  }
}
