// management.js - Handles dynamic loading of management content

document.addEventListener('DOMContentLoaded', function() {
    loadManagementContent();
});

function loadManagementContent() {
    const managementContainer = document.getElementById('management-content');
    
    if (!managementContainer) return;

    const managementHTML = `
        <!-- Advanced Sheep Management Section -->
        <div class="management-section">
            <!-- Protection Systems -->
            <div class="protection-module animate-on-scroll">
                <div class="module-header">
                    <div class="module-icon protection">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="module-title">
                        <h3>Proteção de Ovinos</h3>
                        <span class="module-subtitle">Estruturas Essenciais</span>
                    </div>
                </div>
                
                <div class="protection-grid">
                    <div class="protection-item shelter">
                        <div class="item-visual">
                            <img src="aprisco.png" alt="Aprisco com ventilação adequada" class="item-image">
                            <div class="item-overlay">
                                <i class="fas fa-home"></i>
                            </div>
                        </div>
                        <div class="item-content">
                            <h4>Aprisco</h4>
                            <p>Galpão para abrigo noturno e confinamento diurno.</p>
                            <div class="requirements">
                                <div class="req-item"><i class="fas fa-check"></i>Solo drenado</div>
                                <div class="req-item"><i class="fas fa-check"></i>Ventilação equilibrada</div>
                                <div class="req-item"><i class="fas fa-check"></i>Orientação Leste–Oeste</div>
                                <div class="req-item"><i class="fas fa-check"></i>Piso de terra batida ou ripado</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="protection-item handling">
                        <div class="item-content">
                            <h4>Curral de Manejo</h4>
                            <p>Área de contenção para vacinas, vermifugação, pesagem e casqueamento.</p>
                            <div class="specifications">
                                <div class="spec-grid">
                                    <div class="spec-item">
                                        <strong>1 m²</strong>
                                        <span>por animal</span>
                                    </div>
                                    <div class="spec-item">
                                        <strong>30×50×80cm</strong>
                                        <span>brete trapezoidal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item-visual">
                            <img src="curral.png" alt="Curral de manejo com brete" class="item-image">
                            <div class="item-overlay">
                                <i class="fas fa-tools"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Production Systems -->
            <div class="production-systems animate-on-scroll">
                <div class="systems-header">
                    <h3>Sistemas de Produção</h3>
                    <p>Escolha o melhor método para seu rebanho</p>
                </div>
                
                <div class="systems-carousel">
                    <div class="system-card extensive">
                        <div class="system-badge">
                            <i class="fas fa-leaf"></i>
                            <span>Extensivo</span>
                        </div>
                        <div class="system-image">
                            <img src="piquete.png" alt="Piquetes com ovinos pastando">
                        </div>
                        <div class="system-content">
                            <h4>Divisão de Piquete</h4>
                            <p>Pastoreio rotacionado em piquetes, sempre ao ar livre.</p>
                            <div class="benefits">
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Recuperação de pastagem</span>
                                </div>
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Controle de verminose</span>
                                </div>
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Melhor monitoramento</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="system-card semi-intensive">
                        <div class="system-badge">
                            <i class="fas fa-balance-scale"></i>
                            <span>Semi-intensivo</span>
                        </div>
                        <div class="system-image">
                            <img src="sheep-care.png" alt="Rebanho no pasto ao amanhecer">
                        </div>
                        <div class="system-content">
                            <h4>Pasto + Confinamento</h4>
                            <p>Manhã a pasto (após 9h) e confinamento noturno.</p>
                            <div class="benefits">
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Melhor índice produtivo</span>
                                </div>
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Menor predação</span>
                                </div>
                                <div class="benefit-item negative">
                                    <i class="fas fa-minus"></i>
                                    <span>Requer mais estrutura</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="system-card intensive">
                        <div class="system-badge">
                            <i class="fas fa-industry"></i>
                            <span>Intensivo</span>
                        </div>
                        <div class="system-image">
                            <img src="sheep-care.png" alt="Baias internas com cochos">
                        </div>
                        <div class="system-content">
                            <h4>Confinamento Total</h4>
                            <p>Confinamento permanente com cochos de água e ração.</p>
                            <div class="benefits">
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Alta produtividade</span>
                                </div>
                                <div class="benefit-item positive">
                                    <i class="fas fa-plus"></i>
                                    <span>Controle sanitário</span>
                                </div>
                                <div class="benefit-item negative">
                                    <i class="fas fa-minus"></i>
                                    <span>Alto custo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Complementary Facilities -->
            <div class="facilities-grid animate-on-scroll">
                <div class="facility-item sarnicida">
                    <div class="facility-icon">
                        <i class="fas fa-shower"></i>
                    </div>
                    <h4>Corredor Sarnicida</h4>
                    <p>Estrutura para tratamento de sarna e piolho</p>
                    <img src="sheep-care.png" alt="Corredor sarnicida" class="facility-image">
                </div>
                
                <div class="facility-item night-shelter">
                    <div class="facility-icon">
                        <i class="fas fa-moon"></i>
                    </div>
                    <h4>Abrigo Noturno</h4>
                    <p>Cercado simples para reduzir predação</p>
                    <img src="daily-sheep.png" alt="Cercado noturno" class="facility-image">
                </div>
                
                <div class="facility-item lamb-confinement">
                    <div class="facility-icon">
                        <i class="fas fa-baby"></i>
                    </div>
                    <h4>Confinamento de Cordeiros</h4>
                    <p>Baia pós-desmame até venda (0,60 m² por cordeiro)</p>
                    <img src="sheep-care.png" alt="Baia para cordeiros" class="facility-image">
                </div>
            </div>

            <!-- Feeding Section -->
            <div class="feeding-section animate-on-scroll">
                <div class="feeding-header">
                    <h3>Principais Alimentos</h3>
                    <p>Nutrição balanceada para cada fase</p>
                </div>
                
                <div class="food-categories">
                    <div class="food-category volumosos">
                        <div class="category-header">
                            <div class="category-icon">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <h4>Volumosos</h4>
                        </div>
                        <div class="food-items">
                            <div class="food-item">
                                <img src="daily-sheep.png" alt="Feno e silagem" class="food-image">
                                <div class="food-details">
                                    <strong>Pastagens</strong>
                                    <span>Cynodon, Panicum, pangola</span>
                                </div>
                            </div>
                            <div class="food-item">
                                <div class="food-details">
                                    <strong>Capim picado</strong>
                                    <span>35-45 dias; 8-12% PB</span>
                                </div>
                            </div>
                            <div class="food-item">
                                <div class="food-details">
                                    <strong>Cana-de-açúcar</strong>
                                    <span>Até 120 t/ha/ano</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="food-category concentrados">
                        <div class="category-header">
                            <div class="category-icon">
                                <i class="fas fa-circle"></i>
                            </div>
                            <h4>Concentrados</h4>
                        </div>
                        <div class="food-items">
                            <div class="food-item">
                                <img src="sheep-care.png" alt="Grãos de milho" class="food-image">
                                <div class="food-details">
                                    <strong>Milho</strong>
                                    <span>Energia, complementar com farelo</span>
                                </div>
                            </div>
                            <div class="food-item">
                                <div class="food-details">
                                    <strong>Farelo de soja</strong>
                                    <span>≈ 44% PB para lactação</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="food-category subprodutos">
                        <div class="category-header">
                            <div class="category-icon">
                                <i class="fas fa-recycle"></i>
                            </div>
                            <h4>Subprodutos</h4>
                        </div>
                        <div class="food-items">
                            <div class="food-item">
                                <img src="daily-sheep.png" alt="Polpa cítrica" class="food-image">
                                <div class="food-details">
                                    <strong>Polpa cítrica</strong>
                                    <span>70-75% NDT</span>
                                </div>
                            </div>
                            <div class="food-item">
                                <div class="food-details">
                                    <strong>Caroço de algodão</strong>
                                    <span>Evitar em reprodutores</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Water Requirements -->
            <div class="water-section animate-on-scroll">
                <div class="water-header">
                    <div class="water-icon">
                        <i class="fas fa-tint"></i>
                    </div>
                    <h3>Disponibilidade de Água</h3>
                </div>
                
                <div class="water-grid">
                    <div class="water-category">
                        <div class="category-name">Carneiros</div>
                        <div class="water-amount">7,5L</div>
                        <div class="water-period">por dia</div>
                    </div>
                    <div class="water-category">
                        <div class="category-name">Ovelhas secas</div>
                        <div class="water-amount">7,5L</div>
                        <div class="water-period">por dia</div>
                    </div>
                    <div class="water-category highlight">
                        <div class="category-name">Ovelhas em lactação</div>
                        <div class="water-amount">11,0L</div>
                        <div class="water-period">por dia</div>
                    </div>
                    <div class="water-category">
                        <div class="category-name">Cordeiros em aleitamento</div>
                        <div class="water-amount">0,5L</div>
                        <div class="water-period">por dia</div>
                    </div>
                    <div class="water-category">
                        <div class="category-name">Cordeiros em recria</div>
                        <div class="water-amount">6,0L</div>
                        <div class="water-period">por dia</div>
                    </div>
                </div>
                
                <div class="water-equipment">
                    <img src="sheep-care.png" alt="Bebedouro inox" class="equipment-image">
                    <div class="equipment-note">
                        <i class="fas fa-info-circle"></i>
                        <span>Bebedouros laváveis e desinfetáveis</span>
                    </div>
                </div>
            </div>

            <!-- Market Section -->
            <div class="market-section animate-on-scroll">
                <div class="market-content">
                    <div class="market-text">
                        <div class="market-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <h3>Mercado para Comércio</h3>
                        <div class="market-tips">
                            <div class="tip-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Verificar aceitação prévia do produto</span>
                            </div>
                            <div class="tip-item">
                                <i class="fas fa-chart-line"></i>
                                <span>Evitar estoque prolongado para reduzir custos</span>
                            </div>
                            <div class="tip-item">
                                <i class="fas fa-heart-pulse"></i>
                                <span>Manejo especial para matrizes prestes a parir</span>
                            </div>
                        </div>
                    </div>
                    <div class="market-image">
                        <img src="sheep-care.png" alt="Entrega no mercado agropecuário">
                    </div>
                </div>
            </div>
        </div>
    `;

    managementContainer.innerHTML = managementHTML;
    
    // Re-initialize scroll animations for dynamically loaded content
    initializeScrollAnimations();
}

function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('#management-content .animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(el => scrollObserver.observe(el));
}